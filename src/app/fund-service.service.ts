import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class FundServiceService {
  private supabase:SupabaseClient;
  constructor() { 
    this.supabase=createClient('https://rgtovkpqqydazjfogrro.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJndG92a3BxcXlkYXpqZm9ncnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5NTYyODAsImV4cCI6MTk5MTUzMjI4MH0.oYulG9wfWFEviaaHVTjvpKO5YiSaiO1hynKhm7D-rAo')
  }


async getAllData(){
  return await this.supabase
  .from('fund')
  .select()
 }
}
