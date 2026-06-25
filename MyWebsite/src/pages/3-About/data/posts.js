const age = () => {
    // noinspection JSUnresolvedReference
    const birth = import.meta.env.VITE_BIRTH_DAY
    const getAge = () => {
        const today = new Date()
        const birthDate = new Date(birth)
        let age = today.getFullYear() - birthDate.getFullYear()
        const m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        return age
    }

    return getAge()
}

const posts = [
    {
        title: 'A Bit About Me',
        content: `I’m a ${age()}-year-old software engineering student at Maestro University and a developer at heart. I love building things—whether that means piecing together a clean, responsive web interface or writing scripts to automate the little tasks that make life easier. I’m always balancing my degree with a few personal projects, and I’m constantly looking for new ways to level up my technical skills.`
    },
    {
        title: 'The Toolkit',
        content: `My main stomping grounds are the JavaScript and TypeScript ecosystems, especially when I’m working with React and Vite. When I need to handle data or build something a bit more robust, I lean on Python. I’m a big fan of creating things that not only function well but feel intuitive and polished to use. There’s something really satisfying about taking a rough concept and refining it into a finished product.`
    },
    {
        title: 'Campus & Community',
        content: `As a Student Ambassador at Maestro, I really enjoy connecting with my peers and staying involved in the community. It’s a great environment for sharing ideas and collaborating. I’ve always found that the best part of tech is the social side—breaking down complex problems and figuring out solutions alongside other people who are just as curious as I am.`
    },
    {
        title: 'Looking Ahead',
        content: `I’ve got a lot of goals for the next few years, but one of the biggest is to make my way over to Japan. Whether that turns into a short-term adventure or something longer, I’m really looking forward to experiencing the culture firsthand. For now, I’m focused on building a solid foundation and sharpening the skills that will help me grow my career on an international scale.`
    },
    {
        title: 'When I’m Not Coding',
        content: `If I’m not at my desk, you’ll usually find me working on a new 3D model, diving into a good video game, or experimenting with a new batch of mead. I’ve always been drawn to projects that take a mix of patience and precision to get right. These hobbies are my favorite way to recharge and stay creative—there’s always something new to learn, and honestly, it’s just fun to see what I can create.`
    },
]

export default posts