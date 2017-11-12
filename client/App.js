import React from 'react'
import axios from 'axios'


class App extends React.Component {
  componentDidMount() {
    console.log('API_KEY:', API_KEY)
  }
  render() {
    return (
      <div>
          <h1>Tripopedia</h1>
          <h3>Upload an Image for Details:</h3>
          <form id="fileform">
            <input type="file" name="fileField" />
              <input type="submit" name="submit" value="Submit" />
          </form>
        <div id="article" />
        <p id="wiki-result" />
        <code style={{"white-space":"pre"}} id="results" />
      </div>
    )
  }
}

export default App
