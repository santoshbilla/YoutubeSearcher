import React, { Component} from 'react'
import VideoList from './components/video_list'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import Seachbar from './components/search_bar'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDS9FuvLJ4e94thFVDXxFMeKEwsWBYuKIc'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { videos: [], selectedVideo: null }

    this.videoSearch('surfboards')
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]})
    })
  }
  render () {
    console.log(this.state.videos)
    return (<div>   <Seachbar onSearchTermChange={term=> this.videoSearch(term)}/>  <VideoDetail video={this.state.selectedVideo} /> 
      <VideoList onVideoSelect={ selectedVideo => this.setState({selectedVideo})} 
        videos={this.state.videos} /></div>)
  }
}
ReactDOM.render(<App />, document.querySelector('.container'))
