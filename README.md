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