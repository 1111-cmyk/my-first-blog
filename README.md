# My First Blog - Next.js with Firebase

A simple and modern blog application built using **Next.js** and **Firebase Firestore**. This project leverages **Static Site Generation (SSG)** for optimized performance and fetches blog posts dynamically from Firestore.

## 🚀 Features

- **Static Site Generation (SSG)**: Blog pages are pre-generated at build time for better performance and SEO.
- **Firebase Firestore Integration**: Posts are stored and fetched dynamically using Firebase SDK.
- **Skeleton Loader**: Displays a loading placeholder while fetching blog content.
- **Dynamic Routes**: Each blog post is rendered dynamically based on its unique ID in the URL.

## 🛠️ Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/1111-cmyk/my-first-blog.git
cd my-first-blog
```

### 2. Install Dependencies

Ensure **Node.js** is installed on your system. Then, run:

```bash
npm install
```


### 3. Run the Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
/pages/posts/index.js       - Homepage displaying the list of blog posts
/pages/posts/[id].js        - Post detail page dynamically rendered based on post ID
/components/PostSkeleton/   - Skeleton loader for loading state
/service/getPosts.js        - Utility functions to fetch posts from Firestore
/connection/firebaseConfig.js - Firebase configuration file
```

## 🔄 Data Flow

1. **Homepage (SSG)**:
   - The list of blog posts is pre-generated at build time using **getStaticProps**.
2. **Post Detail Page (Dynamic)**:
   - When a user clicks on a blog post, the application fetches the post details dynamically from Firestore using the post ID in the URL.

## 🖼️ Screenshots

_(Optional: Add screenshots or a demo GIF to showcase the UI and features.)_

## 🌟 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
