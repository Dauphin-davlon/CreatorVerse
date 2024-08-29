import { createClient } from '@supabase/supabase-js';
import { S3Client } from '@aws-sdk/client-s3';

const URL = "https://vhwanttggwiiqeijcdmt.supabase.co";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZod2FudHRnZ3dpaXFlaWpjZG10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0Mzk1MDAsImV4cCI6MjA0MDAxNTUwMH0.u3RrBP5cH5UbTxkYjKrBTrkQSMrnFzcRhHXRUbVG-6k';

export const supabase = createClient(URL, API_KEY);

export const client = new S3Client({
  forcePathStyle: true,
  region: 'us-west-1',
  endpoint: 'https://vhwanttggwiiqeijcdmt.supabase.co/storage/v1/s3',
  credentials: {
    accessKeyId: '3f10d45cd2a965fff81c903d782cd3d4',
    secretAccessKey: '8ffbc2f90d7f63dc69d01a31e576b15470bec1d22516601b679df4d5e0c4f466',
  }
})

