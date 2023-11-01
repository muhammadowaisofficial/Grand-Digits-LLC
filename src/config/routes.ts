export const Routes = {
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    // forgotPassword: '/forgot-password',
  },
  public: {
    home: '/',
    about: '/about',
    contact: '/contact',
    notFound: '/404',
    // userID: (userID: string) => `/user/${userID}`,
    // listingDetails: (slug: string) => `/listing/${slug}`,
  },
  private: {
    dashboard: '/account',
    inbox: '/account/inbox',
    accountSettings: '/account/settings',
  },
};
