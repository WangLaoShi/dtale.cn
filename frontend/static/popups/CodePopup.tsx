import * as React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { default as python } from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import { default as docco } from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

SyntaxHighlighter.registerLanguage('python', python);

import { ButtonBuilderProps, canCopy, default as CopyToClipboard } from '../CopyToClipboard';
import * as menuFuncs from '../dtale/menu/dataViewerMenuUtils';
import { JSAnchor } from '../JSAnchor';

require('./CodePopup.css');

// 将函数组件改为支持国际化的组件
export const CodePopupAnchor: React.FC<{ code: string; title: string } & WithTranslation> = ({ code, title, t }) => {
  const onClick = (): void => {
    (window as any).code_popup = { code, title };
    menuFuncs.open('/dtale/code-popup', undefined, 450, 700);
  };
  return (
    <JSAnchor onClick={onClick}>
      <i className="ico-code pr-3" />
      <span>{t('Code Export', { ns: 'code_export' })}</span>
    </JSAnchor>
  );
};

// 为了保持向后兼容，保留原来的函数，但内部使用新的组件
export const renderCodePopupAnchor = (code: string, title: string): JSX.Element => {
  const TranslatedAnchor = withTranslation('popup')(CodePopupAnchor);
  return <TranslatedAnchor code={code} title={title} />;
};

/** Component properties for CodePopup */
interface CodePopupProps {
  code?: string;
}

const CodePopup: React.FC<CodePopupProps & WithTranslation> = ({ code, t }) => {
  const renderCopyToClipboard = (): React.ReactNode => {
    if (canCopy()) {
      const buttonBuilder = (props: ButtonBuilderProps): JSX.Element => (
        <button className="btn btn-primary" {...props}>
          <i className="far fa-copy pr-3" />
          <span>{t('Copy', { ns: 'code_export' })}</span>
        </button>
      );
      return (
        <div key="footer" className="modal-footer">
          <CopyToClipboard text={code} buttonBuilder={buttonBuilder} tooltipPosition="top" />
        </div>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <div className="modal-body code-popup-modal">
        <SyntaxHighlighter language="python" style={docco}>
          {code ?? ''}
        </SyntaxHighlighter>
      </div>
      {renderCopyToClipboard()}
    </React.Fragment>
  );
};

export default withTranslation('code_export')(CodePopup);
