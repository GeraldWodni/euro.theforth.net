# EuroForth registration website

Uses [forth-conference](https://github.com/GeraldWodni/forth-conference) as basis, see ReadMe there.

## Usage:
After a conference, please perform the following steps:
1. Create a folder for the next year in /views
2. Copy contents there: `cp /views/<last-year> /views/<next-year>`
3. Put [the markdown program](https://euro.theforth.net/program/markdown) into `/views/<last-year>/program.md`
4. Truncate all SQL-Tables to respect the privacy of the former guests:
  __Warning:__ after that the markdown program cannot be rendered anymore, as there is no data left about the presentations
  `TRUNCATE TABLE guests; TRUNCATE TABLE presentations;`

