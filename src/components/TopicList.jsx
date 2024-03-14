import {useState, useEffect} from 'react';
import {getTopics} from '../api';
import {Link} from 'react-router-dom';

export const TopicsList = () => {
    const [topicsList, setTopicsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getTopics().then((data) => {
            setTopicsList(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Bear with us while we get some topics for you...</p>
    }

    return (
    <>
        <h2>Article topics</h2>
        <p>Click on a topic to see a list of related articles</p>
        <section>
            <ul>
                {topicsList.map((topic) => {
                    return <li className="topic-list-item" key={topic.slug}>
                        <Link to={`/ncnews/topics/${topic.slug}`}>
                        <h4>{topic.slug}</h4>
                    </Link>
                    </li>
                })}
            </ul>
        </section>
    </>
    )
}