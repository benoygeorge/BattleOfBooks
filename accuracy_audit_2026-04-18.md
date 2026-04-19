# Battle Of The Books Data Accuracy Audit

Date: 2026-04-18
Scope:
- book_question_bank.js
- research_notes.md

## Method used

1. Validated data structure and counts directly from `book_question_bank.js` exports.
2. Reviewed source-link quality across all citations.
3. Cross-checked high-risk claims against more credible references (author, publisher, Scholastic, School Library Journal, library catalogs).

## Structural verification results

- `bookCatalog` entries: 20
- `questionBank` entries: 60
- All question `bookId` values map to known books.
- Each book has exactly 3 questions.

Conclusion: data shape is consistent and app-ready.

## Source quality results

- Total source URLs in `questionBank`: 111
- URLs from weak/user-generated or commerce/study-helper domains: 32
- Questions with both sources weak: 11
- Questions with mixed quality (one weak, one stronger): 15

Questions where both sources are weak (highest priority to replace):
- wanted-mud-blossom-3
- out-of-my-mind-2
- out-of-my-mind-3
- bearstone-3
- alvin-ho-2
- alvin-ho-3
- a-handful-of-stars-2
- all-about-sam-2
- all-about-sam-3
- the-best-school-year-ever-1
- i-survived-titanic-3

## Accuracy cross-check findings

### Confirmed as accurate against credible references

- `Moo`: Reena trains a cow named `Zora`; prose-and-poetry style is correct.
  - Source used: westmontlibrary.org review page
- `A Handful of Stars`: Lucky is blind; blueberry barrens setting is correct; girls paint bee boxes/houses; Blueberry Queen pageant is part of plot.
  - Source used: cynthialord.com official book page
- `Seven Wonders of Sassafras Springs`: father's challenge, flying outhouse, evil ship in a bottle, and Uncle Alf's woodcarvings are all supported.
  - Source used: bettybirney.com official author page
- `Earthquake Terror`: bridge destroyed; Abby's walker destroyed; children stranded with dog; setup details supported.
  - Source used: schoollibraryjournal.com review
- `Wanted...Mud Blossom`: missing class hamster Scooty and suspicion toward Mud are supported.
  - Source used: holidayhouse.com publisher page

### Not disproven, but currently under-supported due weak citations

These entries are plausible but currently rely on low-confidence sources and should be replaced with stronger citations:
- `all-about-sam-2`, `all-about-sam-3`
- `alvin-ho-2`, `alvin-ho-3`
- `bearstone-3`
- `i-survived-titanic-3`
- `out-of-my-mind-2`, `out-of-my-mind-3`
- `the-best-school-year-ever-1`
- `wanted-mud-blossom-3`

## Check against `research_notes.md`

The conflict notes are directionally accurate and consistent with this audit:
- `Moo` cow name correction (`Zora`) is correct.
- `A Handful of Stars` note is correct for Lucky, barrens, bee houses, and eye-care motivation.
- `Pocket Full of Colors` dual-author credit is consistent with known bibliography listings.
- `The Best School Year Ever` and `Earthquake Terror` caution notes are reasonable.

## Recommended remediation order

1. Replace sources for the 11 all-weak entries first.
2. Replace weak links in the 15 mixed-quality entries.
3. Prefer these source types:
   - Official publisher/author pages
   - Scholastic/major educational publishers
   - School Library Journal, Kirkus, Publishers Weekly
   - Library catalogs/discussion guides from recognized institutions
4. Avoid using Quizlet/Prezi/Bookey/blog posts as primary evidence for factual claims.

## Final confidence

- Data model and most core plot summaries: Medium-High confidence.
- Citation quality across the full bank: Medium confidence (currently limited by 32 weak links).
- After citation replacement for flagged entries: expected High confidence.
