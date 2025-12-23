import type { DefaultTheme } from 'vitepress'

export const searchConfig: DefaultTheme.Config['search'] = {
  provider: 'local',
  options: {
    locales: {
      root: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回上一级',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'escape'
            }
          }
        }
      },
      en: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            displayDetails: 'Display detailed list',
            resetButtonTitle: 'Clear query conditions',
            backButtonTitle: 'Go back',
            noResultsText: 'No relevant results found',
            footer: {
              selectText: 'to select',
              selectKeyAriaLabel: 'enter',
              navigateText: 'to navigate',
              navigateUpKeyAriaLabel: 'up arrow',
              navigateDownKeyAriaLabel: 'down arrow',
              closeText: 'to close',
              closeKeyAriaLabel: 'escape'
            }
          }
        }
      },
      ja: {
        translations: {
          button: {
            buttonText: '検索',
            buttonAriaLabel: '検索'
          },
          modal: {
            displayDetails: '詳細リストを表示',
            resetButtonTitle: 'クエリ条件をクリア',
            backButtonTitle: '戻る',
            noResultsText: '関連する結果が見つかりません',
            footer: {
              selectText: '選択',
              selectKeyAriaLabel: 'エンター',
              navigateText: 'ナビゲート',
              navigateUpKeyAriaLabel: '上矢印',
              navigateDownKeyAriaLabel: '下矢印',
              closeText: '閉じる',
              closeKeyAriaLabel: 'エスケープ'
            }
          }
        }
      },
      'zh-tw': {
        translations: {
          button: {
            buttonText: '搜尋文檔',
            buttonAriaLabel: '搜尋文檔'
          },
          modal: {
            displayDetails: '顯示詳細列表',
            resetButtonTitle: '清除查詢條件',
            backButtonTitle: '返回上一級',
            noResultsText: '無法找到相關結果',
            footer: {
              selectText: '選擇',
              selectKeyAriaLabel: '回車',
              navigateText: '切換',
              navigateUpKeyAriaLabel: '上箭頭',
              navigateDownKeyAriaLabel: '下箭頭',
              closeText: '關閉',
              closeKeyAriaLabel: 'escape'
            }
          }
        }
      }
    }
  }
}
