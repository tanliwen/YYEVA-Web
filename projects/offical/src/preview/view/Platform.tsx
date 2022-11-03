import {Badge, Card, Typography, Row, Col, Avatar, Tooltip} from 'antd'
import {
  WechatOutlined,
  ChromeOutlined,
  AppleOutlined,
  AndroidOutlined,
  Html5Outlined,
  SettingOutlined,
  FileSearchOutlined,
  ToolOutlined,
  SearchOutlined,
  LinkOutlined,
  EditOutlined,
  EllipsisOutlined,
  GithubOutlined,
  DownloadOutlined,
  BugOutlined,
  CommentOutlined,
} from '@ant-design/icons'
const PlatformItem = ({children, actions}: any) => (
  <Col span={4} xs={8} sm={6} md={4} lg={4}>
    <Card actions={actions}>{children}</Card>
  </Col>
)
const Platform = () => (
  <div className="platform">
    <Row wrap={true} gutter={[16, 16]}>
      <PlatformItem
        actions={[
          <GithubOutlined
            key="setting"
            onClick={() => {
              window.open('https://github.com/yylive/YYEVA/tree/main/AEP', '_blank')
            }}
          />,
          <Tooltip key="comment" title="issue 意见&建议">
            <CommentOutlined
              onClick={() => {
                window.open('https://github.com/yylive/YYEVA/issues', '_blank')
              }}
            />
          </Tooltip>,
        ]}
      >
        <div className="icon">
          <ToolOutlined />
          AE-Plugin
        </div>
      </PlatformItem>
      <PlatformItem
        actions={[
          <GithubOutlined
            key="setting"
            onClick={() => {
              window.open('https://github.com/yylive/YYEVA-iOS', '_blank')
            }}
          />,
          <Tooltip key="comment" title="issue 意见&建议">
            <CommentOutlined
              onClick={() => {
                window.open('https://github.com/yylive/YYEVA-iOS/issues', '_blank')
              }}
            />
          </Tooltip>,
        ]}
      >
        <div className="icon">
          <AppleOutlined />
          IOS
        </div>
      </PlatformItem>
      <PlatformItem
        actions={[
          <GithubOutlined
            key="setting"
            onClick={() => {
              window.open('https://github.com/yylive/YYEVA-Android', '_blank')
            }}
          />,
          <Tooltip key="comment" title="issue 意见&建议">
            <CommentOutlined
              onClick={() => {
                window.open('https://github.com/yylive/YYEVA-Android/issues', '_blank')
              }}
            />
          </Tooltip>,
        ]}
      >
        <div className="icon">
          <AndroidOutlined />
          Android
        </div>
      </PlatformItem>

      <PlatformItem
        actions={[
          <GithubOutlined
            key="setting"
            onClick={() => {
              window.open('https://github.com/yylive/YYEVA-Web', '_blank')
            }}
          />,
          <Tooltip key="comment" title="issue 意见&建议">
            <CommentOutlined
              onClick={() => {
                window.open('https://github.com/yylive/YYEVA-Web/issues', '_blank')
              }}
            />
          </Tooltip>,
          <Tooltip key="polyfill" title="兼容性列表">
            <BugOutlined
              onClick={() => {
                window.open('https://github.com/yylive/YYEVA-Web/blob/main/docs/device.md', '_blank')
              }}
            />
          </Tooltip>,
        ]}
      >
        <div className="icon">
          <Html5Outlined />
          Web
        </div>
      </PlatformItem>
      <PlatformItem
        actions={[
          <Tooltip key="npm" title="NPM 安装包">
            <DownloadOutlined
              onClick={() => {
                window.open('https://www.npmjs.com/package/yyeva-wechat', '_blank')
              }}
            />
          </Tooltip>,
          <Tooltip key="comment" title="issue 意见&建议">
            <CommentOutlined
              onClick={() => {
                window.open('https://github.com/yylive/YYEVA-Web/issues', '_blank')
              }}
            />
          </Tooltip>,
        ]}
      >
        <div className="icon">
          <WechatOutlined />
          微信小程序
        </div>
      </PlatformItem>
      <PlatformItem
        actions={[
          <GithubOutlined
            key="setting"
            onClick={() => {
              window.open('https://github.com/yylive/YYEVA-Web', '_blank')
            }}
          />,
          <Tooltip key="comment" title="issue 意见&建议">
            <CommentOutlined
              onClick={() => {
                window.open('https://github.com/yylive/YYEVA-Web/issues', '_blank')
              }}
            />
          </Tooltip>,
        ]}
      >
        <div className="icon">
          <FileSearchOutlined />
          百度小程序
        </div>
      </PlatformItem>
    </Row>
  </div>
)
export default Platform
