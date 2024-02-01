import Wrapper from '../assets/wrappers/KeywordsList';
import { keywordsList } from '../utils/pageData';

const KeywordsList = () => {
  return (
    <Wrapper>
      <div className="container">
        {keywordsList.map((keyword) => {
          const { id, title, context, icon } = keyword;

          return (
            <article>
              <span className="icon">{icon}</span>
              <div>
                <h5>{title}</h5>
                <p>{context}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default KeywordsList;
