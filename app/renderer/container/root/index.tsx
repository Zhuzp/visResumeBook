// renderer/container/root/index.tsx
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import Logo from '@assets/logo.png';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Root() {
    const history = useHistory();
    const dispatch = useDispatch();
    const appName = useSelector((state:any) => state.globalModel.appName)
    useEffect(() => {
        setTimeout(() => {
          console.log('3s 后修改...');
          dispatch({
            type: 'globalModel/setStore',
            payload: {
              key: 'appName',
              values: 'visResumeMook',
            },
          });
        }, 3000);
      }, []);
    
      useEffect(() => {
        console.log('appName = ', appName);
      }, [appName]);
    const onRouterToLink = (router: TSRouter.Item) => {
        console.log(router)
        if(isHttpOrHttpsUrl(router.url)) {
            console.log('跳转到简历页面')
            shell.openExternal(router.url)
        } else {
            console.log('进入到 github')
            history.push(router.url)
        }
    }
    return (
        <div styleName='root'>
            <div styleName="container">
                <img src={Logo} alt="" />
                <div styleName="title">VisResumeMook</div>
                <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
                <div styleName="action">
                    {ROUTER_ENTRY.map((router: TSRouter.Item) => {
                        return (
                            <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>{router.text}</div>
                        );
                    })}
                </div>
                <div styleName="copyright">
                    <div styleName="footer">
                        <p styleName="copyright">
                            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Root;