import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { SupabaseService } from 'src/app/services/supabase.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loading = false

  signInForm = this.formBuilder.group({
    email: '',
    password:''
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string
      const password=this.signInForm.value.password as string
      const { error } = await this.supabase.signIn({email:email,password:password})
      if (error) throw error
      //alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }
}
