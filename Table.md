front-end-ts
├── public
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
├── src
│   ├── app.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── api
│   │   ├── bankApi.ts
│   │   ├── index.ts
│   │   ├── momoApi.ts
│   │   ├── shopeePayApi.ts
│   │   ├── zaloPayApi.ts
│   ├── assets
│   │   ├── images
│   │   │   ├── logo.png
│   │   │   ├── banner.jpg
│   │   ├── styles
│   │       ├── global.css
│   │       ├── variables.css
│   │       ├── mixins.css
│   ├── components
│   │   ├── navbar.tsx
│   │   ├── ticketComponent.tsx
│   │   ├── common
│   │   │   ├── button.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── table.tsx
│   │   │   ├── form.tsx
│   ├── contexts
│   │   ├── authContext.tsx
│   │   ├── themeContext.tsx
│   ├── data 
│   │   ├── defaultValues.ts
│   │   ├── mockTickets.ts
│   │   ├── promotionsData.ts
│   │   ├── tripsData.ts
│   ├── hooks
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   ├── useTheme.ts
│   ├── pages
│   │   ├── home.tsx
│   │   ├── auth
│   │   │   ├── auth_css
│   │   │   │   ├── forgotPassword.css
│   │   │   │   ├── resetPassword.css
│   │   │   │   ├── signIn_signUp.css
│   │   │   ├── signIn.tsx
│   │   │   ├── signUp.tsx
│   │   ├── admin
│   │   │   ├── dashboard.tsx
│   │   │   ├── bookingManagement
│   │   │   │   ├── allBookings.tsx
│   │   │   │   ├── bookingDetail.tsx
│   │   │   ├── vehicleManagement
│   │   │   │   ├── busList.tsx
│   │   │   │   ├── taxiList.tsx
│   │   │   │   ├── tourList.tsx
│   │   ├── payment_page
│   │   │   ├── payment_css
│   │   │   │   ├── payment.css
│   │   │   ├── payment.tsx
│   ├── routers
│   │   ├── appRouter.tsx
│   ├── utils
│   │   ├── formatDate.ts
│   │   ├── validateForm.ts
│   │   ├── calculatePrice.ts
├── package.json
├── tsconfig.json
└── readme.md