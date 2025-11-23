/*
  # Create Form Submission Tables

  This migration creates all tables needed for the ITSS marketing website form submissions.

  ## New Tables

  ### 1. quote_requests
  Stores customer quote requests from the quote modal/form
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Submission timestamp
  - `name` (text, required) - Customer name
  - `email` (text) - Customer email
  - `phone` (text, required) - Customer phone number
  - `service` (text, required) - Requested service type
  - `message` (text) - Additional message/details
  - `location` (text) - Customer location
  - `read` (boolean) - Whether admin has read the request

  ### 2. contacts
  Stores contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Submission timestamp
  - `name` (text, required) - Sender name
  - `email` (text, required) - Sender email
  - `phone` (text) - Sender phone number
  - `subject` (text, required) - Message subject
  - `message` (text, required) - Message content
  - `read` (boolean) - Whether admin has read the message

  ### 3. waitlist
  Stores waitlist signups from the store page
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Signup timestamp
  - `name` (text, required) - User name
  - `email` (text, required, unique) - User email
  - `phone` (text, required) - User phone number
  - `interests` (text[]) - Array of interested services

  ### 4. applications
  Stores job applications from careers page
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Application timestamp
  - `name` (text, required) - Applicant name
  - `email` (text, required) - Applicant email
  - `phone` (text, required) - Applicant phone number
  - `position` (text, required) - Applied position
  - `experience` (integer, required) - Years of experience
  - `why_itss` (text) - Why they want to work at ITSS
  - `cv_url` (text) - URL to uploaded CV
  - `portfolio_url` (text) - URL to portfolio
  - `read` (boolean) - Whether admin has reviewed application

  ### 5. newsletter
  Stores newsletter subscriptions
  - `id` (uuid, primary key) - Unique identifier
  - `created_at` (timestamptz) - Subscription timestamp
  - `email` (text, required, unique) - Subscriber email
  - `subscribed` (boolean) - Current subscription status
  - `unsubscribed_at` (timestamptz) - Unsubscribe timestamp

  ## Security
  - Enable RLS on all tables
  - Allow public INSERT access (for form submissions)
  - Restrict SELECT/UPDATE/DELETE to authenticated users only
  - This allows visitors to submit forms without authentication
  - But prevents unauthorized access to submitted data

  ## Notes
  - All tables use UUID for primary keys with automatic generation
  - Timestamps use timestamptz for proper timezone handling
  - Email uniqueness enforced on waitlist and newsletter to prevent duplicates
  - Default values set for boolean fields (read=false, subscribed=true)
*/

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT,
    location TEXT,
    read BOOLEAN NOT NULL DEFAULT false
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN NOT NULL DEFAULT false
);

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    interests TEXT[]
);

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    position TEXT NOT NULL,
    experience INTEGER NOT NULL,
    why_itss TEXT,
    cv_url TEXT,
    portfolio_url TEXT,
    read BOOLEAN NOT NULL DEFAULT false
);

-- Create newsletter table
CREATE TABLE IF NOT EXISTS newsletter (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    email TEXT NOT NULL UNIQUE,
    subscribed BOOLEAN NOT NULL DEFAULT true,
    unsubscribed_at TIMESTAMPTZ
);

-- Enable Row Level Security on all tables
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

-- RLS Policies for quote_requests
CREATE POLICY "Allow public insert on quote_requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on quote_requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on quote_requests"
  ON quote_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on quote_requests"
  ON quote_requests
  FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contacts
CREATE POLICY "Allow public insert on contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on contacts"
  ON contacts
  FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for waitlist
CREATE POLICY "Allow public insert on waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on waitlist"
  ON waitlist
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on waitlist"
  ON waitlist
  FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for applications
CREATE POLICY "Allow public insert on applications"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on applications"
  ON applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on applications"
  ON applications
  FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for newsletter
CREATE POLICY "Allow public insert on newsletter"
  ON newsletter
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated select on newsletter"
  ON newsletter
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on newsletter"
  ON newsletter
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete on newsletter"
  ON newsletter
  FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_read ON quote_requests(read);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_read ON contacts(read);
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_read ON applications(read);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed ON newsletter(subscribed);