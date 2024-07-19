# Global Code Queens Open Source Project

This is an open source project developed as part of the [Open Source Project](https://www.linkedin.com/posts/frontendqueens_opensource-collaboration-community-activity-7201980886232317952-VBld?utm_source=share&utm_medium=member_desktop) initiative by the [FrontEnd Queens](https://www.linkedin.com/company/frontendqueens/)

## The Challenge

The challenge is to build out a multi-page website and get it looking as close to the design as possible.

## Design

The challenge is part of [Frontend Mentor](https://www.frontendmentor.io/) premium version, hence we are not adding a link of the Design file here.

## More details will be added in due course of time

# Getting Started

1. Clone the repo. From the terminal, run:
   `git clone https://github.com/poulami-saha/Global-Code-Queens-MyTeam-Website.git`
2. Navigate into it: `cd Global-Code-Queens-MyTeam-Website`
3. You will be on the `main` branch and that will be the only branch you have locally to start. You can see a list of all the branches (both local _and_ remote) by running `git branch -a`. The result will look something like
   ```
     feature/reusable-button-component
   * feature/routing
     main
     typography-component
     remotes/origin/HEAD -> origin/main
     remotes/origin/feature/form-element-component
     remotes/origin/feature/reusable-button-component
     remotes/origin/feature/routing
     remotes/origin/layout-fix
     remotes/origin/main
     remotes/origin/master
     remotes/origin/responsive-footer
     remotes/origin/responsive-footer-component
     remotes/origin/typography-component
   ```
4. This project uses npm as its package manager (not yarn). Install the dependencies by running `npm install`.
5. Start the local dev server with `npm start`.
   - If you haven't run `npm install`, you won't be able to start the site.
   - Occasionally, new dependencies may be added. When this happens, you'll probably need to run the install command again.

# Branching

## How to organize branches

- **DO _NOT_** work directly on the `main` branch. Work on a different branch and open a pull request when you're ready to have your work reviewed to merge into `main`.
- Branches for working on new features can be named starting with `feature/`, e.g., `feature/routing` or `feature/buttons`
- Branches for fixing bugs can be named starting with `fix/`, e.g., `fix/layout` or `fix/about-text`
- Names describing the purpose of the branch are probably best for this project. (Be aware that some projects use ticket numbers to name branches, like `ticket/42` or `KAN-1`, especially when the project gets over a certain size or volume of tickets.)

## Using branches

- To check out a remote branch, such as `remotes/origin/feature/routing`, you run `git checkout feature/routing` and it will automatically set up tracking for the remote branch.
- When you want to start working, decide whether you want to branch from `main` or from one of the other branches. There are two workflows; either is fine!
  - Option 1:
    - Check out the branch you want to start working from (e.g., `git checkout main` or `git checkout feature/my-feature`)
    - Open a new branch from there: `git checkout -n feature/example`
  - Option 2:
    - Open a new branch from `main`
    - Merge the current state of any branch(es) that you want features from, using
      `git pull origin desired-branch-name` **from inside your new branch**

# Pull Requests

Pull requests, or PRs, are how we share our work for review before merging it into the main branch. GitHub has documentation for how to create a [PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

Please start the subject of PRs with the Jira ticket number. If you were opening a PR for the [routing ticket](https://poulamisaha.atlassian.net/jira/software/projects/KAN/boards/1?selectedIssue=KAN-9), that's KAN-9, so the subject line should start with "[KAN-9]". You can look at our [closed PRs](https://github.com/poulami-saha/Global-Code-Queens-MyTeam-Website/pulls?q=is%3Apr+is%3Aclosed) to see examples.

When you have opened a PR, please let us know! **All members of the team are encouraged to review PRs and ask questions** about why code does things. It helps us all learn!

- "Conversation" tab is where all comments will be visible, whether general or attached to specific bit of code (see "Files changed" tab)
- "Commits" tab lets you see individual commits on the branch being PR'd
- "Checks" is for showing results of automated testing; we have not set this up yet.
- "Files changed" tab shows the current diffs for all files in the PR
  - You can leave comments on a particular line of code and it will be visible on the "Conversation" tab
  - You can use the green "Review Changes" button to
    - leave general comments
    - flag "Request changes" (a signal that something important must be done before merging)
    - "Approve changes" (which should be done when requested changes are made to your satisfaction, or anytime everything looks mergeable without comment)

## Merging PRs

- PRs must be approved by at least one team member before they are merged.
  - This can mean a delay of up to a day or two, because our team is spread across many time zones. Please be patient.
  - Reach out to folks on Slack, either in the team channel or by DMs, if you're trying to accelerate the process.
- Please do not merge your PR if you have 1 approval and there is a change requested by another approver. Please address all comments before merging the PR.
- We encourage people to merge their own PRs after approval!
  - Merge conflicts will happen sometimes and it's good to learn about resolving them.
  - If you're uncomfortable doing your own merge, ask if someone can help walk you through it.
  - If you know that another PR has touched the same file(s) as yours and got merged before yours, you can resolve the merge locally on your branch, pushing that change, and then merging the PR.
