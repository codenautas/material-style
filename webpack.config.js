module.exports=[{
    mode:"development",
    output: {
        filename: 'material-styles.development.js',
        // libraryTarget: 'amd'
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "@material-ui/core": "MaterialUI",
        "react-redux": "ReactRedux",
        "redux-thunk": "ReduxThunk"
    }
},{
    mode:"production",
    output: {
        filename: 'material-styles.production.min.js',
        // libraryTarget: 'amd'
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "@material-ui/core": "MaterialUI",
        "react-redux": "ReactRedux",
        "redux-thunk": "ReduxThunk"
    }
}]