variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "AWS CLI profile Terraform should use"
  type        = string
  default     = "default"
}

variable "bucket_name" {
  description = "Globally unique S3 bucket name for static site content"
  type        = string
}

variable "project_name" {
  description = "Project name used for tagging"
  type        = string
  default     = "battle-of-books"
}

variable "custom_domain" {
  description = "Fully qualified custom domain for CloudFront (for example: battleofbooks.benoy.net)"
  type        = string
}

variable "route53_zone_name" {
  description = "Route53 hosted zone name that will contain DNS records (for example: benoy.net)"
  type        = string
}
