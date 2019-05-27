import React, {Component} from 'react'
import ReactMarkDown from 'react-markdown'
class App extends Component {
    render() {
        const markdown = '## 只求极致222\n' +
      '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
      '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n' +
       '**这是加粗的文字**\n' +
      '*这是倾斜的文字*`\n' +
      '***这是斜体加粗的文字***\n' +
      '~~这是加删除线的文字~~ \n'+
      '> aaaaaaaaa\n' +
      '>> bbbbbbbbb\n' +
      '>>> cccccccccc\n'+
      '***\n' +
      '*****' + 
      '```' +
      `function` +
      '```'
        return (
            <div>
                <ReactMarkDown source={markdown} />
            </div> 
        )
    }
}

export default App