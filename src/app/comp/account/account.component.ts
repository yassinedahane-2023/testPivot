import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthSession } from '@supabase/supabase-js';
import { delay, filter } from 'rxjs';
import { Profile, SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

@UntilDestroy({ checkProperties: true })
export class AccountComponent implements OnInit{
  @ViewChild(MatSidenav)sidenav!: MatSidenav;
  loading = false
  profile!: Profile

  @Input()
  session!: AuthSession

  updateProfileForm = this.formBuilder.group({
    username: 'user',
    website: '',
    avatar_url: '',
  })

  constructor(private observer: BreakpointObserver, private router: Router,private readonly supabase: SupabaseService, private formBuilder: FormBuilder) {}
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  
    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
  async ngOnInit(): Promise<void> {
   // await this.getProfile()

    /* const { username, website, avatar_url } = this.profile
    this.updateProfileForm.patchValue({
      username,
      website,
      avatar_url,
    }) */
  }

  async getProfile() {
    try {
      this.loading = true
      const { user } = this.session
      let { data: profile, error, status } = await this.supabase.profile(user)

      if (error && status !== 406) {
        throw error
      }

      if (profile) {
        this.profile = profile
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

 /*  async updateProfile(): Promise<void> {
    try {
      this.loading = true
      const { user } = this.session

      //const username = this.updateProfileForm.value.username as string
      const username="user"
      const website = this.updateProfileForm.value.website as string
      const avatar_url = this.updateProfileForm.value.avatar_url as string

      const { error } = await this.supabase.updateProfile({
        id: user.id,
        username,
        website,
        avatar_url,
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }
 */
  async signOut() {
    await this.supabase.signOut()
  }
}
