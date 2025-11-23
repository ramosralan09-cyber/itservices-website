import { createClient } from '@supabase/supabase-js'

class BoltDatabaseClient {
  private static instance: BoltDatabaseClient
  private client: any

  private constructor() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    if (!url || !key) {
      throw new Error('Bolt Database credentials not configured')
    }

    this.client = createClient(url, key)
  }

  public static getInstance(): BoltDatabaseClient {
    if (!BoltDatabaseClient.instance) {
      BoltDatabaseClient.instance = new BoltDatabaseClient()
    }
    return BoltDatabaseClient.instance
  }

  public async insert(table: string, data: any) {
    const { data: result, error } = await this.client
      .from(table)
      .insert([data])
      .select()

    if (error) {
      throw new Error(`Database insert failed: ${error.message}`)
    }

    return result
  }

  public async query(table: string, filters?: any) {
    let query = this.client.from(table).select('*')

    if (filters) {
      Object.keys(filters).forEach(key => {
        query = query.eq(key, filters[key])
      })
    }

    const { data, error } = await query

    if (error) {
      throw new Error(`Database query failed: ${error.message}`)
    }

    return data
  }

  public async update(table: string, id: string, data: any) {
    const { data: result, error } = await this.client
      .from(table)
      .update(data)
      .eq('id', id)
      .select()

    if (error) {
      throw new Error(`Database update failed: ${error.message}`)
    }

    return result
  }
}

export const db = BoltDatabaseClient.getInstance()
