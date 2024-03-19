// pages/admin/index.js

import Link from 'next/link';

export default function Admin() {
  return (
    <div>
      <h1>Admin Ana Sayfa</h1>
      <p>Buradan admin paneline ve admin girişine erişebilirsiniz.</p>
      <ul>
        <li>
          <Link href="/admin/login">
            <a>Giriş Yap</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/panel">
            <a>Panel</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
