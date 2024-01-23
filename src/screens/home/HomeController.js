import BaseLayout from "@app/components/layout";
// import HomeView from '@app/containers/Home';
import R from "@app/res/R";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeView from "./HomeView";
import { useHomeModel } from "./HomeModel";

const HomeController = (props) => {
  const dispatch = useDispatch();
  const {onHeaderBtnPress} = useHomeModel()

  console.log("render");
  return (
    <BaseLayout
      enableHeader={false}
      barStyle={"dark-content"}
      statusBarBg={R.color.primaryDark}
      enableTabView={false}
      disableScrollView={true}
      onHeaderBtnPress={onHeaderBtnPress}
      headerBtnText={R.strings.comman.Login}
      headerBtnIcon={'login'}
      headerBtnColor={R.color.black1}
    >
      <HomeView {...props} />
    </BaseLayout>
  );
};

export default HomeController;
