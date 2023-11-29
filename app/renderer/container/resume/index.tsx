import React from 'react';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';

function Resume() {
    getAppPath().then((rootPath: string) => {
        fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
            console.log(data);
        });
    })
  
    return (
        <div styleName="container">
            <div styleName="header">
                <ResumeAction />
            </div>
            <div styleName="content">
                <ResumeContent />
            </div>
            <div styleName="toolbar">
                <ResumeToolbar />
            </div>
      </div>
    )
}

export default Resume;