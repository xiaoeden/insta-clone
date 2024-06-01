# Work Diaries

Reference: https://github.com/burakorkmez/instagram-clone

5/31/2024

- Started constructing the post layout for home page
- _TODO_: The caption content cannot be formatted correctly when we add a VerifiedIcon between the username and caption content. The content will start a newline when the text overflow. Adding a `textOverflow={"ellipsis"}` didn't help.

5/30/2024

- Created PageLayout and Sidebar
- Created all the logo assets for the side bar, they are svg's taken directly from the Instagram website
- _TODO_: Fill the sidebar icons on hover

5/29/2024

- Disable the log in button when the password length is less than 6
- A Show/Hide text is shown on the right of the password input box when the user is inputting into the field
- Users are navigated to their account home page after they clicked "Log in" (no authentication at this stage)
- ~~_TODO_: Show/Hide hover effect~~ (5/30/2024)
- _TODO_: Note that in the real Instagram website, the placeholder text in the input box shrinks its size and move to the upper right. This is something to be done later https://stackoverflow.com/questions/35942247/how-to-move-placeholder-to-top-on-focus-and-while-typing

5/28/2024

- Added AuthForm
- Added LoginForm and SignupForm, which are nested in the AuthForm
- Added LogoButton, which is a button with a Facebook logo before the text
- Added Facebook icons from https://about.meta.com/brand/resources/facebook/logo/, the icon downloaded from this link is a rounded icon, but I couldn't find a square icon that's free so let's just roll with the rounded one

5/27/2024

- Setting up the project, install Chakra https://v2.chakra-ui.com/
- Create HomePage and AuthPage
