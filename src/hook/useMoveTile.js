import { useEffect } from "react";
import { addKeyOvserver, removeKeyOvserver } from "../util/keboard";

export default function useMoveTile(){
    function moveUp(){}
    function moveDown(){}
    function moveLeft(){}
    function moveRigth(){}
    useEffect(() => {
        addKeyOvserver('up' , moveUp);
        addKeyOvserver('down', moveDown);
        addKeyOvserver('left', moveLeft);
        addKeyOvserver('right', moveRigth);
        
        return () => {
            removeKeyOvserver('up' , moveUp);
            removeKeyOvserver('down', moveDown);
            removeKeyOvserver('left', moveLeft);
            removeKeyOvserver('right', moveRigth);
        }
    });
}