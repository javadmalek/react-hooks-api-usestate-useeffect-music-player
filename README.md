# JAMT(Just-Add-Music-Task)

The task is intentionally loosely defined so that you can showcase your skills as a front
end developer.

Build a page which is connected to some of JAM public APIs that are
showing:

- List of songs (paginated) with thumb nail and play/pause button
- Each row should have 2 options which are to like a song and to comment a song
- Each request should return success or failure status

The end points are:

- get list of songs: `https://api-stg.jam-community.com/song/trending`
- like a song: `https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8`
    - method is post and you should send us `id` of a song which the sample id is `00042cf4-2ce4-11e6-bd70-0661aaff07f9`
- comment a song: `https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8`
    - method is post and you should send us `id` of a song which the sample id is `00042cf4-2ce4-11e6-bd70-0661aaff07f9` 
    - also `type` which is song and message which will be your comment

Please build the site in whatever UI / UX you feel is appropriate and that showcases your skills in
building modern websites. Animations, transitions etc. are not mandatory but definitely a plus.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
