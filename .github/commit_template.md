feat(auth): Add user registration endpoint

- Implement user registration API endpoint.
- Validate user input for registration.
- Store user information in the database.
- Add unit tests for registration functionality.

Here's a breakdown of each part:

<type>: Describes the purpose or category of the commit. Common types include:

feat: A new feature or enhancement.
fix: A bug fix.
chore: Routine tasks, maintenance, or refactoring.
docs: Documentation-related changes.
style: Code style/formatting changes (no production code change).
test: Adding or modifying tests.
perf: Performance-related changes.
ci: Changes to the CI/CD pipeline or configurations.
<scope> (optional): Describes the part of the codebase that the commit affects. This can be a module, file, or component. It's often omitted for small changes.

<subject>: A brief, imperative statement that summarizes the purpose of the commit in the present tense. It should be concise and to the point. For example:

"feat(auth): Add user registration endpoint"
"fix(ui): Resolve button click issue"
"docs(readme): Update installation instructions"

<body> (optional): A more detailed description of the changes made in the commit. Use this section to provide context, explain why the change was necessary, and describe any notable implementation details. Not all commits need a body, but it can be helpful for complex changes.

<footer> (optional): This section can be used to reference related issues, link to documentation, or include any additional notes. Common use cases include referencing GitHub issues or specifying breaking changes. For example:

"Closes #123"
"BREAKING CHANGE: The API now requires an access token."
