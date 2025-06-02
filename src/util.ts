// Copyright (c) 2025 Yifeng Wu
// This file is part of incredible-me and is licensed under the MIT License.
// See the LICENSE file for more details.

export function formatDate(
  date: Date,
  locale: string = 'en-US',
  options?: Intl.DateTimeFormatOptions
): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    ...options,
  });
}
