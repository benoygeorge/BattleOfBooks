output "cloudfront_domain_name" {
  description = "CloudFront URL for the website"
  value       = "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "s3_bucket_name" {
  description = "S3 bucket name storing site files"
  value       = aws_s3_bucket.site.id
}

output "custom_domain_url" {
  description = "Custom domain URL for the website"
  value       = "https://${var.custom_domain}"
}
