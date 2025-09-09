import {data} from "../Navigation/data.js"
export default function RenderBox({topic}) {
    const obj = data.find((value)=>(
        String(topic).toLowerCase()===String(value.id).toLowerCase()
    ))
    const Comp=obj.render;
    return <Comp/>
}