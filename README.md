# My First Blog - Next.js with Firebase

This is a simple blog application built with **Next.js** and **Firebase**. The blog supports Static Site Generation (SSG) and fetches posts dynamically from Firestore.

## Features

- **Static Site Generation (SSG)**: The blog pages are pre-generated at build time.
- **Firebase Integration**: Posts are stored in Firestore, and data is fetched using Firebase SDK.
- **Skeleton Loader**: A loading placeholder is shown while the post content is loading.
- **Dynamic Routes**: Each blog post is dynamically rendered based on its ID from the URL.

## Setup

To run the project locally, follow these steps:

### 1. Clone the repository:

```bash
1.git clone https://github.com/1111-cmyk/my-first-blog.git
cd my-first-blog
2. Install dependencies:
Make sure you have Node.js installed. Then, install the required dependencies:

bash
Copy code
npm install
3. Set up Firebase:
To connect your application with Firebase:

Go to Firebase Console.
Create a Firebase project if you don't have one.
Set up Firestore and get the Firebase config from your project settings.
Replace the Firebase config in connection/firebaseConfig.js with your own.

4. Run the development server:
Start the development server by running:

bash
Copy code
npm run dev
Now, visit http://localhost:3000 to view the application.

File Structure
pages/posts/index.js: The homepage where the list of blog posts is displayed.
posts/[id].js: This page renders the details of a single post.
components/PostSkeleton/: A skeleton loader component for loading posts.
service/getPosts.js: Contains functions to fetch posts from Firebase.
connection/firebaseConfig.js: Firebase configuration file to initialize Firestore.
Data Flow The application uses Static Site Generation (SSG) to pre-generate the list of posts. When a user clicks on a post, it dynamically fetches and displays the content using its ID.

```
