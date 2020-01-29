export const CONTEXT = {
  LANDLORD: {
    title: "Are you a home owner?",
    icons: [
      {
        typeIcons: "LANDLORD",
        type: "SEARCH",
        title: "Search property managers",
        context:
          "Within seconds using the address or zip code of your property."
      },
      {
        typeIcons: "LANDLORD",
        type: "MANAGERS",
        title: "Compare property managers",
        context: "in your local area based on their fees, services, and more!"
      },
      {
        typeIcons: "LANDLORD",
        type: "CHAT",
        title: "Chat with property managers",
        context: "to see if they are a good fit for your needs."
      }
    ]
  },
  PROPERTY_MANAGER: {
    title: "Are you a property manager?",
    icons: [
      {
        typeIcons: "PROPERTY_MANAGER",
        type: "LIGHT",
        title: "Work smarter, not harder",
        context:
          "Coraway finds landlords for you by advertising your services on a larger scale."
      },
      {
        typeIcons: "PROPERTY_MANAGER",
        type: "REFERRAL",
        title: "Earn referral fees",
        context: "Get money for referring other property managers"
      },
      {
        typeIcons: "PROPERTY_MANAGER",
        type: "RATING",
        title: "Protect your reputation ",
        context: "Avoid negative reviews from bad clients."
      }
    ]
  },
  FIND_MANAGER_TODAY: {
    title: "Find a local property manager today",
    describe: "It literally takes 30 seconds",
    button: "Contact Us",
    placeholder: "Enter your email address"
  },
  QUESTIONS: {
    title: "Any Questions?",
    email: "info@coraway@.com",
    describe: "Feel free to get in touch anytime at: ",
    secondDescribe:
      "Enter your email below and we will contact you within 24 hours",
    button: "Contact Us",
    placeholder: "Enter your email address"
  },
  FIRST_SECTION: {
    first_part_title: "Find and compare local",
    second_part_title: "Property Managers",
    description: "Find and explore top rated property managers today.",
    placeholder: "Enter your email address",
    button: "Get Started",
    trendingLocation: {
      name: "Trending locations",
      locations: [{ name: "Seattle" }, { name: "Chicago" }, { name: "Austin" }]
    }
  },
  //   FIRST_SECTION: {
  //     first_part_title: "Find and compare local",
  //     second_part_title: "Property Managers",
  //     description: "Find the perfect property manager for your property today.",
  //     placeholder: "Enter your address, city or zip code",
  //     button: "Contact Us",
  //     trendingLocation: {
  //       name: "Trending locations",
  //       locations: [{ name: "Seattle" }, { name: "Chicago" }, { name: "Austin" }]
  //     }
  //   },
  FOOTER: {
    links: [
      // {
      //   name: "How it Works",
      //   href: "/how_it_works"
      // },
      // {
      //   name: "FAQs",
      //   href: "/faqs"
      // },
      // {
      //   name: "Contact us",
      //   href: "/contact_us"
      // },
      // {
      //   name: "Blog",
      //   href: "/blog"
      // }
    ],
    licence: "2019 Coraway. All Rights Reserved"
  },
  RESULT: {
    title: "property managers near",
    description: "Specializing in Single Family Homes"
  },
  FILTER: {
    title: "Filter by:",
    filters: [
      {
        placeholder: "Ratings",
        key: "ratings",
        data: [
          { name: "Ratings", value: "Ratings" },
          { name: "1", value: 1 },
          { name: "2", value: 2 },
          { name: "3", value: 3 },
          { name: "4", value: 4 },
          { name: "5", value: 5 }
        ]
      },
      {
        placeholder: "Management type",
        key: "managementType",
        data: [
          { name: "Management type", value: "Management type" },
          { name: "MPM®", value: "MPM®" },
          { name: "RMP®", value: "RMP®" },
          { name: "PRO", value: "PRO" },
          { name: "CRMC®", value: "CRMC®" },
          { name: "VRBO", value: "VRBO" }
        ]
      },
      {
        placeholder: "Service type",
        key: "serviceType",
        data: [
          { name: "Service type", value: "Service type" },
          { name: "Service type 1", value: "Full service" },
          { name: "Service type 2", value: "One service" },
          { name: "Service type 3", value: "Part service" }
        ]
      }
    ]
  },
  SIGN_IN: {
    title: "Sign in",
    button: "SIGN IN",
    form: {
      email: "Email",
      password: "Password"
    },
    mobile: {
      landlord: {
        title: "Log in to view your saved property managers."
      },
      property_manager: {
        title: "Log in to connect with landlords seeking your services."
      },
      footer: {
        link: "No Account? Sign up today!"
      }
    }
  },
  MAIL_CHIMP: {
    title: "Request a demo",
    button: "Request a demo",
    form: {
      email: "Email",
      password: "Password"
    },
    mobile: {
      landlord: {
        title:
          "Request a demo and get access to hundreds of property managers today."
      },
      property_manager: {
        title:
          "Request a demo and get access to hundreds of homeowners looking for property managers."
      },
      footer: {
        link: "No Account? Sign up today!"
      }
    }
  },
  SIGN_UP: {
    title: "Sign up",
    button: "SIGN UP",
    form: {
      email: {
        property_manager: "Company email",
        landlord: "Email"
      },
      password: "Password",
      confirmPassword: "Confirm password",
      name: {
        property_manager: "Company name",
        landlord: "Username"
      }
    },
    mobile: {
      landlord: {
        title: "Create an account to save property managers in your area."
      },
      property_manager: {
        title:
          "Create an account to connect with landlords needing your services in your area."
      }
    },
    footer: {
      link: "Have an account? Log in"
    }
  },
  AUTH_TABS: {
    data: [
      {
        key: "landlord",
        value: "Personal"
      },
      {
        key: "property_manager",
        value: "Company"
      }
    ]
  },
  GUEST_BROWSER: {
    title: "Don't Miss Out!",
    describe:
      "If you skip signing up, you can still use the app but won’t be able to save property managers or read all reviews.",
    buttons: {
      signUp: "Sign up",
      startBrowsing: "Start Browsing"
    }
  }
};
