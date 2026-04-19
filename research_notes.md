# Battle Of The Books Research Notes

## What this is

- `book_question_bank.js` contains 60 app-ready questions.
- Each question includes the book id, title, author, explanation, source links, and a simple evidence level.
- The structure is ready for a later UI feature where students select which books they want in the quiz.

## Important source conflicts I found

- `Moo`: the researched summaries consistently identify the cow as `Zora`, not `Helen`.
- `A Handful of Stars`: the researched plot points center on `Lucky`, blueberry barrens, painted bee houses, and money for eye-related care. I did not find strong support for a bracelet business or a service-dog goal in the sources I collected.
- `Pocket Full of Colors`: the full author credit is `Amy Guglielmo and Jacqueline Tourville`.
- `The Best School Year Ever`: the strongest source support I found was for Herdman antics plus the class compliment assignment, not the "good-deed badge" phrasing from the earlier prompt.
- `Earthquake Terror`: the strongest source support I found was for the bridge collapse, Abby's walker, and the dog Moose. I did not confirm "Jonathan's broken leg" from the earlier prompt.

## Research approach

- Preferred official author, publisher, school/library, and discussion-guide sources where possible.
- Used secondary study/quiz sources when the book was older or when official materials were thin.
- Kept the explanations short so they can be shown directly in a quiz app after each answer.

## Accuracy remediation update

- Replaced the audit-flagged weak links in all 11 all-weak entries and all 15 mixed-quality entries.
- Shifted the updated citations toward official publisher pages, author pages, library catalogs, Scholastic resources, and school/library discussion guides.
- Rewrote a small number of under-supported claims so they rely on stronger evidence instead of twist-level or fan-study details.

### Rewritten claims

- `wanted-mud-blossom-3`
  Rewritten from a jury-twist claim to Scooty/the hamster-tunnel setup, which is better supported by publisher and library descriptions.
- `out-of-my-mind-3`
  Rewritten from a specific goldfish-accident phrasing to the broader, source-backed significance of Ollie the fish in Melody's story.
- `all-about-sam-2`
  Rewritten from pantry/hat phrasing to the better-supported haircut and nursery-school description from publisher materials.
- `all-about-sam-3`
  Rewritten from a weakly sourced first-words claim to the better-supported secret-codes/show-and-tell/broccoli description.

### Remaining medium-confidence items

- `bearstone-2`
- `bearstone-3`
- `the-best-school-year-ever-3`

These now use better non-user-generated study/reference sources, but they still rely on secondary literary summaries rather than official publisher or author materials.

## Recommended next step for the app

- Let students choose one or more `bookId` values from `bookCatalog`.
- Filter `questionBank` to only those selected books before randomizing questions.
- Keep the sources in the data model so you can show a short citation popup or teacher-only review panel later.
