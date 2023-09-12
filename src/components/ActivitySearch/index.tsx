import { ReactNode, useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

type Props = {
  placeholder: string;
  data: any[];
  searchKey: string;
  searchedData: (data: null | any[]) => void;
  children?: ReactNode;
};

import styles from "./Search.module.css";

const ActivitySearch = (props: Props) => {
  const { data, searchKey, onSearch, searchedData } = props;

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const [searchedDataResult, setSearchedDataResult] = useState<null | any[]>(
    null,
  );

  useEffect(() => {
    if (data) {
      if (searchValue !== "") {
        const result = data?.filter((item: any) => {
          if (!item?.[searchKey]) return false;
          return item?.[searchKey]
            ?.toLowerCase()
            .includes(searchValue.toLowerCase());
        });

        setSearchedDataResult(result);
      } else {
        setSearchedDataResult(data);
      }
    }
  }, [searchValue, data]);

  useEffect(() => {
    searchedData(searchedDataResult);
  }, [searchedDataResult]);

  return (
    <div className={styles.search}>
      <InputBase
        sx={{
          flexGrow: 100,
          pl: 2,
          backgroundColor: "#fff",
          borderRadius: 100,
          borderLeft: 1,
          borderTop: 1,
          borderBottom: 1,
          borderColor: "#DDDDDD",
          borderRight: 0,
        }}
        placeholder={props.placeholder}
        inputProps={{ "aria-label": "search members of our community" }}
        onChange={handleSearchChange}
        endAdornment={<SearchIcon sx={{ margin: "1rem" }} />}
      />
      {props.children}
    </div>
  );
};

export default ActivitySearch;
