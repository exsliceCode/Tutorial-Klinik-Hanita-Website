/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['www.imgbb.com'],
    // },
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'i.ibb.co',
    //         port: '',
    //         pathname: 'www.imgbb.com',
    //       },
    //     ],
    //   },

}

module.exports = {
    images: {
        domains: ['img.freepik.com','www.canva.com','d1csarkz8obe9u.cloudfront.net','i.ibb.co','images.unsplash.com','mail.google.com','drive.google.com','images.pexels.com'],
    },

    /* next.config.js  */
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
      },
}


