import {h, Component} from 'preact'
import * as CodeMirror from 'codemirror'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/neo.css'

interface IProps{
    value: string

}

interface IState{
   
}

export default class CodeMirrorComponent extends Component<IProps, IState>{
    render(props: IProps, state: IState){
        return <div></div>
    }

    componentDidMount(){
        let editor = CodeMirror(this.base, {
            value: this.props.value,
            mode: 'markdown',
            theme: 'neo',
            lineWrapping: true,
            viewportMargin: Infinity,
            cursorBlinkRate: 0
        })
    }
}