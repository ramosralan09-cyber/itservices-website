/*
  # Add location column to quote_requests

  ## Changes
  - Add `location` column to `quote_requests` table to store project location/address

  ## Details
  - Column type: TEXT (nullable)
  - Allows customers to specify where their project will be located
  - Used by QuoteModal component for quote submissions
*/

-- Add location column if it doesn't exist
ALTER TABLE quote_requests 
ADD COLUMN IF NOT EXISTS location TEXT;