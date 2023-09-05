import { Oval } from 'react-loader-spinner';

import { OvalWrapper } from 'components/App/App.styled';

const spinnerOval = () => {
  return (
    <OvalWrapper>
      <Oval
        height={80}
        width={80}
        color="#534da9"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </OvalWrapper>
  );
};

export { spinnerOval };
