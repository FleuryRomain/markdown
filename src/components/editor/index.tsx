import {h, Component} from 'preact'
import CodeMirror from './CodeMirrorComponent'
import './style.scss'

interface IProps{
    value: string|null
    name: string|null
}

interface IState{
    content: string
}

export default class Editor extends Component<IProps, IState> {

    constructor(props: IProps){
        super(props)
        this.state = {
            content: props.value || ''
        }
    }
    render({name}: IProps, {content}: IState): JSX.Element{
        return <div class="mdeditor">
            <div class="mdeditor__toolbar"></div>
            <div class="mdeditor__editor">
                <CodeMirror value={content}/>
            </div>
            <div class="mdeditor__preview"></div>
            <textarea name={name || ''} style="display: none;">{content}</textarea>
        </div>
    }
}