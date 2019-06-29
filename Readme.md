# React Native/iOS - Technical Task

Thanks for applying to work at FATMAP. We have developed this task for you to work on in your own time so that we can see how you approach tasks and as a discussion point going forwards.

We'd like you to implement a solution using both React Native and a native module written in Swift.

## The task

Using the off-pistes.json (this file contains the off-piste lines in Chamonix) file in this repo, build a React Native + Swift application that does the following:

- Presents a scrollable list of the off-piste lines to the user including name and description using React Native.

- When a user clicks on one of the above off-piste lines, display a rendered 2d representation of the line (using the _geo_data_ field) - the rendering component should be written in Swift using RCTBridgeModule.

- **Bonus task** Allow searching for an off-piste line by name.

### Notes

- Please create documentation for the steps required to build and run the project.

# Installation

## Setup

**Step 1:** git clone the repo: `git clone https://github.com/garrialmighty/technical-task-mobile.git`

**Step 2:** cd to the cloned repo then into the project folder: `cd technical-task-mobile`

**Step 3:** Install dependencies: `yarn`

## Running the App

1.  cd to the repo
2.  Run Build for iOS:

- run `react-native run-ios`
