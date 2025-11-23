/*
  # Create Form Submissions Tables

  Creates tables for anonymous form submissions from the website:
  - quote_requests: Public quote request forms
  - contact_messages: Contact form submissions  
  - newsletter_subscribers: Email newsletter signups
  - job_applications: Career/job applications

  ## Tables Created

  ### quote_requests
  - id (uuid, primary key)
  - name (text) - Full name
  - email (text) - Email address
  - phone (text) - Phone number
  - service (text) - Service interested in
  - message (text, optional) - Additional details
  - read (boolean) - Admin has read
  - created_at (timestamptz)

  ### contact_messages
  - id (uuid, primary key)
  - name (text) - Full name
  - email (text) - Email address
  - phone (text, optional) - Phone number
  - subject (text) - Message subject
  - message (text) - Message content
  - read (boolean) - Admin has read
  - created_at (timestamptz)

  ### newsletter_subscribers
  - id (uuid, primary key)
  - email (text, unique) - Email address
  - subscribed (boolean) - Active subscription
  - created_at (timestamptz)

  ### job_applications
  - id (uuid, primary key)
  - name (text) - Full name
  - email (text) - Email address
  - phone (text) - Phone number
  - position (text) - Position applying for
  - experience (integer) - Years of experience
  - why_itss (text, optional) - Why work at ITSS
  - cv_url (text, optional) - Resume URL
  - portfolio_url (text, optional) - Portfolio URL
  - read (boolean) - Admin has read
  - created_at (timestamptz)

  ## Security
  - RLS enabled on all tables
  - INSERT allowed for anonymous users (form submissions)
  - SELECT/UPDATE/DELETE restricted to authenticated admins
*/

-- Quote Requests Table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view quote requests"
  ON quote_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update read status"
  ON quote_requests FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update read status"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update subscriptions"
  ON newsletter_subscribers FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Job Applications Table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  position text NOT NULL,
  experience integer DEFAULT 0,
  why_itss text,
  cv_url text,
  portfolio_url text,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit job applications"
  ON job_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view applications"
  ON job_applications FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update read status"
  ON job_applications FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_read ON quote_requests(read);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(read);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_read ON job_applications(read);
