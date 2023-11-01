import { cn } from '@/utils/utils';
import { LucideProps, User } from 'lucide-react';

export const Icons = {
  user: User,
  signin: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-log-in', props.className)}
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  ),
  signout: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-log-out', props.className)}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  ),
  circle: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#ffffff"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-circle', props.className)}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="204.262"
      height="71"
      viewBox="0 0 204.262 71"
      className={cn('lucide lucide-logo', props.className)}
    >
      <g id="Group_2" data-name="Group 2" transform="translate(-1055 -532)">
        <text
          id="DESIGN_STUDIO"
          data-name="DESIGN STUDIO"
          transform="translate(1092 600)"
          fill="#e73b01"
          fontSize="12"
          fontFamily="SegoeUI, Segoe UI"
          letterSpacing="0.3em"
        >
          <tspan x="0" y="0">
            DESIGN STUDIO
          </tspan>
        </text>
        <g id="Group_1" data-name="Group 1" transform="translate(1055 532)">
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="13.448"
            cy="13.448"
            r="13.448"
            fill="#e73b01"
          />
          <path
            id="Path_1"
            data-name="Path 1"
            d="M252.488,496.708V455.625h9.449v41.083Z"
            transform="translate(-240.913 -446.555)"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.98"
          />
          <path
            id="Path_2"
            data-name="Path 2"
            d="M313.2,514.067h-9.1V495.7c0-8.569,5.634-14.731,14.379-14.731,8.334,0,14.379,5.752,14.379,14.731v18.37h-9.038v-18.9c0-3.58-2.113-6.1-5.341-6.1-3.111,0-5.282,2.406-5.282,6.1Z"
            transform="translate(-276.273 -463.915)"
          />
          <path
            id="Path_3"
            data-name="Path 3"
            d="M408.833,512.424l1.291-7.688a24.238,24.238,0,0,0,10.505,2.523c2.23,0,4.108-.587,4.05-2.582,0-1.7-1.467-2.641-5.517-3.874-7.043-1.761-9.977-4.46-9.977-9.742.059-6.808,5.693-10.095,12.5-10.095a30.443,30.443,0,0,1,10.271,2l-1.174,7.571a22.53,22.53,0,0,0-9.214-2.113c-2.348,0-3.581.7-3.581,2.289s1.291,2.582,5.106,3.7c7.454,2.171,10.447,5.106,10.447,10.212-.059,6.691-5.576,10.095-12.971,10.095A28.5,28.5,0,0,1,408.833,512.424Z"
            transform="translate(-348.015 -463.915)"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M508,513.03V495.3H494.738v7.571h4.226v11.1c0,6.984,3.7,10.622,10.388,10.622a21.484,21.484,0,0,0,6.391-1.064v-7.845a12.376,12.376,0,0,1-4.572.87C509.176,516.552,508,515.436,508,513.03Z"
            transform="translate(-406.863 -473.735)"
          />
          <rect
            id="Rectangle_1"
            data-name="Rectangle 1"
            width="10.359"
            height="7.571"
            transform="translate(99.173 21.567)"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M573.937,498.1c0-10.212,6.28-17.138,15.67-17.138,9.214,0,15.553,6.749,15.553,17.314v15.788h-7.923l-.235-3.4a11.27,11.27,0,0,1-8.98,4.108C579.982,514.771,573.937,508.081,573.937,498.1ZM596,498.045c0-5.576-2.641-9.1-6.456-9.1s-6.515,3.4-6.515,8.979c0,5.634,2.641,8.8,6.456,8.8C593.246,506.731,596,503.62,596,498.045Z"
            transform="translate(-461.117 -463.915)"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M700.989,514.067h-9.1V495.7c0-8.569,5.634-14.731,14.379-14.731,8.334,0,14.379,5.752,14.379,14.731v18.37h-9.038v-18.9c0-3.58-2.113-6.1-5.341-6.1-3.111,0-5.282,2.406-5.282,6.1Z"
            transform="translate(-541.92 -463.915)"
          />
          <rect
            id="Rectangle_2"
            data-name="Rectangle 2"
            width="9.038"
            height="13.784"
            transform="translate(92.101 15.114)"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M808.766,513.03V495.3H795.5v7.571h4.226v11.1c0,6.984,3.7,10.622,10.388,10.622a21.484,21.484,0,0,0,6.391-1.064v-7.845a12.376,12.376,0,0,1-4.572.87C809.94,516.552,808.766,515.436,808.766,513.03Z"
            transform="translate(-612.897 -473.735)"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M831.373,495.3h0l10.359,7.571V495.3Z"
            transform="translate(-637.47 -473.735)"
            fill="#e73b01"
          />
          <path
            id="Path_9"
            data-name="Path 9"
            d="M817.957,484.436l-9.038,4.164V474.815h9.038Z"
            transform="translate(-622.088 -459.701)"
          />
          <circle
            id="Ellipse_2"
            data-name="Ellipse 2"
            cx="4.307"
            cy="4.307"
            r="4.307"
            transform="translate(6.174 35.512)"
            fill="#e73b01"
          />
        </g>
      </g>
    </svg>
  ),
  phone: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14.665"
      height="14.665"
      viewBox="0 0 14.665 14.665"
      className={cn('lucide lucide-phone', props.className)}
    >
      <path
        id="Icon_ionic-md-call"
        data-name="Icon ionic-md-call"
        d="M18.35,14.684a9.562,9.562,0,0,1-2.892-.448.762.762,0,0,0-.815.2l-1.793,1.792a12.251,12.251,0,0,1-5.377-5.377L9.266,9.062a.849.849,0,0,0,.2-.815,8.86,8.86,0,0,1-.489-2.933A.817.817,0,0,0,8.166,4.5H5.315a.817.817,0,0,0-.815.815,13.838,13.838,0,0,0,13.85,13.85.817.817,0,0,0,.815-.815V15.5A.817.817,0,0,0,18.35,14.684Z"
        transform="translate(-4.5 -4.5)"
        fill="#e73b01"
      />
    </svg>
  ),
  menu: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-menu', props.className)}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  plus: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-plus', props.className)}
    >
      <line x1="12" x2="12" y1="5" y2="19" />
      <line x1="5" x2="19" y1="12" y2="12" />
    </svg>
  ),
  list: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.535"
      height="11.539"
      viewBox="0 0 11.535 11.539"
      className={cn('lucide lucide-list', props.className)}
    >
      <g
        id="Group_19"
        data-name="Group 19"
        transform="translate(661.662 -261.113)"
      >
        <path
          id="Path_63"
          data-name="Path 63"
          d="M-650.127,266.543v.676a1.123,1.123,0,0,0-.02.12,4.912,4.912,0,0,1-.108.745,5.628,5.628,0,0,1-2.143,3.375,5.6,5.6,0,0,1-4.708,1.057,5.569,5.569,0,0,1-3.359-2.126,5.61,5.61,0,0,1-1.167-4.085,5.574,5.574,0,0,1,1.407-3.225,5.7,5.7,0,0,1,3.336-1.879c.218-.04.439-.048.656-.087h.676a.615.615,0,0,0,.087.019,5.49,5.49,0,0,1,2.517.794,5.693,5.693,0,0,1,2.737,3.963C-650.176,266.1-650.156,266.325-650.127,266.543Zm-5.771-4.494a4.84,4.84,0,0,0-4.829,4.832,4.84,4.84,0,0,0,4.829,4.832,4.844,4.844,0,0,0,4.835-4.838A4.843,4.843,0,0,0-655.9,262.049Z"
          transform="translate(0)"
          fill="#e73b01"
        />
        <path
          id="Path_64"
          data-name="Path 64"
          d="M-561.124,396.165c.057-.051.088-.077.117-.105l2.845-2.7a.474.474,0,0,1,.667-.058.463.463,0,0,1,.061.647.9.9,0,0,1-.085.09l-3.237,3.069a.47.47,0,0,1-.724-.006q-.847-.865-1.69-1.734a.47.47,0,0,1-.144-.461.464.464,0,0,1,.749-.251,1.377,1.377,0,0,1,.106.1q.633.649,1.265,1.3A.711.711,0,0,1-561.124,396.165Z"
          transform="translate(-95.558 -128.353)"
          fill="#e73b01"
        />
      </g>
    </svg>
  ),
  right: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-right', props.className)}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  facebook: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-facebook', props.className)}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  insta: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-instagram', props.className)}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  linkedin: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-instagram', props.className)}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  play: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#e73b01"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-play', props.className)}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  star: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#f8b820"
      stroke="#f8b820"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-star', props.className)}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  quote: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="#e73b01"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-quote', props.className)}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  ),
  x: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-x', props.className)}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  messageCircle: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e73b01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('lucide lucide-message-circle', props.className)}
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  ),
};
