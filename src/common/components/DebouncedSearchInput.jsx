import { useCallback } from 'react';
import { Input } from 'antd';
import { debounce } from 'lodash';

const DebouncedSearchInput = (props) => {
  const { placeholder, onChange, delay, ...rest } = props;

  const searchFieldHandler = (e) => {
    onChange(e.target.value);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(debounce(searchFieldHandler, delay || 500), []);

  return (
    <>
      <Input type="text" className="form-control-sm" placeholder={placeholder || ''} onChange={debounceSearch} {...rest} />
    </>
  );
};

export default DebouncedSearchInput;
