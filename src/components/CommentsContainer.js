// import React from "react";
// import CommentsList from "./CommentsList";

// const commentsData = [
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [
//       {
//         name: "Akshay Saini",
//         text: "Lorem ipsum dolor sit amet, consectetur adip",
//         replies: [],
//       },
//       {
//         name: "Akshay Saini",
//         text: "Lorem ipsum dolor sit amet, consectetur adip",
//         replies: [
//           {
//             name: "Akshay Saini",
//             text: "Lorem ipsum dolor sit amet, consectetur adip",
//             replies: [
//               {
//                 name: "Akshay Saini",
//                 text: "Lorem ipsum dolor sit amet, consectetur adip",
//                 replies: [
//                   {
//                     name: "Akshay Saini",
//                     text: "Lorem ipsum dolor sit amet, consectetur adip",
//                     replies: [
//                       {
//                         name: "Akshay Saini",
//                         text: "Lorem ipsum dolor sit amet, consectetur adip",
//                         replies: [],
//                       },
//                     ],
//                   },
//                   {
//                     name: "Akshay Saini",
//                     text: "Lorem ipsum dolor sit amet, consectetur adip",
//                     replies: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Akshay Saini",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
// ];

// const CommentsContainer = () => {
//   // console.log(commentsData);
//   return (
//     <div>
//       <p className="font-bold text-xl px-2 py-2">Comments</p>
//       <CommentsList comments={commentsData} />
//     </div>
//   );
// };

// export default CommentsContainer;

import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Ajay Kushwah",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ajay Kushwah",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Ajay Kushwah",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Ajay Kushwah",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Ajay Kushwah",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Ajay Kushwah",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Ajay Kushwah",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Ajay Kushwah",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Ajay Kushwah",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ajay Kushwah",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ajay Kushwah",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ajay Kushwah",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Ajay Kushwah",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
