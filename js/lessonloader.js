export async function getLessonByName(name) {
    try {
        const response = await fetch('./../json/' + name + '.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.error('Error fetching json:', error);
        return null;
    }
}

export async function getAllLessonsData() {
    try {
        const response = await fetch('./../json/lessons.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
    } 
    catch (error) {
        console.error('Error fetching json:', error);
        return null;
    }
}