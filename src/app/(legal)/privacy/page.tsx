export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

      <div className="prose max-w-none text-foreground">
        <p>
          NotePressは、ユーザーの個人情報について以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </p>

        <h2>1. 個人情報の収集方法</h2>
        <p>
          当社は、ユーザーが利用登録をする際に、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされた取引の状況や内容、サービスの閲覧履歴、および履歴情報特性の情報を収集することがあります。
        </p>

        <h2>2. 個人情報を収集・利用する目的</h2>
        <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
        <ol>
          <li>当社サービスの提供・運営のため</li>
          <li>ユーザーからのお問い合わせに回答するため</li>
          <li>
            ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため
          </li>
          <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
          <li>
            利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため
          </li>
          <li>
            ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため
          </li>
        </ol>

        <h2>3. 個人情報の第三者提供</h2>
        <p>
          当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
        </p>

        <h2>4. 個人情報の開示</h2>
        <p>
          当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
        </p>

        <h2>5. プライバシーポリシーの変更</h2>
        <p>
          本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
        </p>
      </div>
    </div>
  );
}
