import hotkeys from 'hotkeys-js';

const observerMap = {}
export function addKeyOvserver(key, callback){
    if(!observerMap[key]) {
        observerMap[key] = [];
        hotkeys(key, () => executeCallvacks(key));
    }
    observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback){
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

function executeCallvacks(key) {
    for (const ob of observerMap[key]){
        ob();
    }
}