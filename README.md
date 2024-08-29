# WEB103 Prework - CreatorVerse

Submitted by: David Alonge

About this web app: This app is a Content Creator Showcase Platform that allows users to browse, add, and manage profiles of various content creators. It features a landing page with a call-to-action button to add new creators, a dynamic grid that displays creator profiles with images and names, and links to detailed pages for each creator. The app is built with React, styled using PicoCSS, and integrates with Supabase for backend services, ensuring a responsive and visually appealing experience across all devices.

Time spent: 10hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [X] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [X] Picocss is used to style HTML elements
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [] make it so that users can post an image instead of an image url when adding or editing creators

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='./src/assets/web103_prework.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  LiceCap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

During the development of my React app, I encountered several challenges that required problem-solving and creative solutions. One major issue was ensuring that elements, such as the "View Details" link, were correctly displayed within my components. This was complicated by CSS issues that affected the layout and visibility of certain elements. Additionally, integrating Supabase with my React app presented challenges, particularly in fetching data from the database and managing error handling and loading states effectively.

Styling the app using PicoCSS also posed difficulties. I needed to manage custom properties and ensure a consistent and visually appealing design across various components. Another significant challenge involved implementing image handling and storage, allowing users to upload or capture images, store them in Supabase's image storage, and display them within the app. This required careful management of file inputs, image URLs, and integration with cloud storage services.

Creating a responsive grid layout for displaying creator cards was another hurdle. I had to ensure the layout was well-spaced, aligned, and adaptable to different screen sizes. Implementing navigation using React Router was also a key focus, where setting up routes and ensuring smooth page transitions proved to be complex. Finally, handling errors gracefully and providing clear user feedback, especially during backend interactions, was crucial in delivering a seamless user experience.

## License

Copyright 2024 David Alonge

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.