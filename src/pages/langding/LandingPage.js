import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//system test
import { spacing, palette } from "@material-ui/system";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const defaultProps = {
  bgcolor: "",
  m: 1,
  style: { width: "5rem", height: "5rem" },
  display: { xs: "block", sm: "none", md: "block" },
  // borderColor: "text.primary",
};

const useStyles = makeStyles((theme) => ({
  pig: {
    border: ` ${theme.color} 3px solid`,
    "&:hover": {
      color: "blue",
    },
  },
  ".pig:hover": {
    color: "red",
  },
  hov: {
    border: "yellow 2px solid",
  },
}));

function PropConsoler(props) {
  console.log(props);
  return <p {...props}>{JSON.stringify(props)}</p>;
}

export default function LandingPage(props) {
  const theme = useTheme();
  return (
    <>
      <h2>Landing Page</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        obcaecati quasi dolores, optio voluptatem sunt illum. Atque doloremque
        voluptatibus velit mollitia architecto expedita totam quasi quam porro.
        Sunt libero adipisci illo odit dignissimos porro non ratione! Illo,
        deleniti vitae molestias numquam culpa similique necessitatibus ipsum
        iusto labore quod suscipit ratione ex, obcaecati, autem distinctio
        debitis at quidem pariatur molestiae. Quam ratione iste possimus
        voluptas quis illum ullam magnam nemo excepturi? Animi, architecto,
        voluptatum recusandae veniam iste dolorem doloribus dignissimos, ab
        harum soluta veritatis saepe eius tempore illum eligendi totam. Nam
        vitae harum perspiciatis fuga ut numquam animi, quos velit illo pariatur
        maiores, excepturi minus sunt dolore. Fuga obcaecati quod atque dicta
        optio nulla, iusto recusandae exercitationem quos quibusdam in debitis
        impedit quaerat culpa qui officiis aliquid laborum porro odit delectus
        esse nemo fugiat velit quis. Ipsam impedit distinctio neque accusamus
        blanditiis esse fuga eos libero illo, cum saepe illum veniam itaque
        molestiae error numquam laborum nobis obcaecati explicabo tempora modi
        repellat? Numquam accusamus nam debitis sapiente repellat, eveniet sequi
        tempora harum dolor similique corporis delectus quod cum illum commodi.
        Quod, ipsa magni. Quasi id distinctio accusamus possimus velit vitae
        ratione tempore pariatur corporis cumque repudiandae aliquid optio,
        veritatis, fugit quisquam sint. Aspernatur doloribus distinctio
        molestiae repellat rerum amet ex repellendus porro obcaecati nihil,
        aliquid est recusandae voluptatem pariatur tempore neque minima
        deleniti, debitis, explicabo hic. Cupiditate quis, velit laudantium
        iusto non dolor facere nam sunt? Qui quae rerum perferendis cum harum
        enim recusandae voluptate corporis possimus dolore neque natus
        perspiciatis nulla ipsam atque illum veritatis libero, labore rem
        repellendus delectus veniam provident? Nostrum quos culpa at quasi
        obcaecati aspernatur eum perferendis ratione consectetur consequuntur
        vero, fugiat, sapiente facere adipisci aperiam nobis! Quibusdam amet,
        quaerat in, quasi, eveniet sequi reiciendis labore corporis dolorum nam
        consectetur quidem? Ipsum voluptates perspiciatis quas autem facere
        dolores tempore ad corrupti inventore expedita voluptatum porro et
        adipisci totam aliquam pariatur molestias maiores natus, unde earum
        nihil cupiditate cum eius provident! Exercitationem alias mollitia odio
        eos perspiciatis beatae? Fugit ullam facilis ad libero at? Sunt
        molestiae dolor voluptas veniam aut non eius quibusdam quo pariatur fuga
        minima quos ipsum id, adipisci voluptatibus exercitationem ab
        perferendis hic quasi inventore consectetur nemo et eos molestias!
        Nostrum eum dignissimos labore debitis, animi autem quia delectus
        doloribus error fugit? Velit consequatur eos quae culpa expedita unde
        consectetur ad quod! Ullam, totam, blanditiis earum nam dolorum illo
        optio veritatis quia dicta ut pariatur iste tempora alias corrupti
        reprehenderit veniam nesciunt hic? Sed excepturi dicta perferendis
        optio. Architecto ratione harum, iste fuga libero voluptatibus at rem?
        Et error cupiditate nesciunt ducimus sapiente quod harum enim, pariatur
        ad! Quae exercitationem cumque consectetur, vitae saepe nihil est
        facilis quia, magnam voluptatum expedita eos quas odio accusantium
        maiores reprehenderit aliquam sequi assumenda? Quia culpa quis quae
        dolores voluptatibus doloremque suscipit consequuntur velit, atque
        deserunt ullam quaerat ad mollitia magni? Accusamus, praesentium
        officiis. In saepe ullam nesciunt rerum dolore atque recusandae
        exercitationem porro nisi mollitia eveniet ducimus iure est, quae vel,
        eaque minus expedita consectetur. Eius eum laudantium esse accusamus eos
        veniam blanditiis deserunt ullam animi quam a iusto voluptates maiores,
        porro enim accusantium quasi impedit aut harum velit facilis quibusdam
        earum aliquid numquam. Esse, nemo officia doloribus quod ipsam labore
        dolores ipsa cum dicta ab incidunt delectus corrupti assumenda quaerat
        deleniti aliquid quisquam facilis neque eius itaque voluptatum. Vel ex
        unde sapiente sint deserunt dolore perspiciatis ipsum, dolorem placeat,
        qui, fuga temporibus quia maiores sed asperiores pariatur nemo. Quis vel
        nihil quaerat dolore explicabo inventore iure accusantium aliquid fuga
        natus tenetur voluptatibus eligendi impedit repudiandae vero consectetur
        minus debitis, ratione aut dignissimos sint facere animi iusto libero!
        Architecto magni error quo, fugit sed, inventore nemo fuga nesciunt
        doloribus neque, minima aut ad iste quia dolorem. Vel quia voluptatibus
        accusantium eaque perspiciatis? Assumenda eos, voluptatum recusandae
        doloremque autem atque blanditiis laudantium tempora ut eligendi,
        impedit illum corporis quidem harum natus ullam unde? Quasi accusantium
        eos eaque. Quod perspiciatis iste beatae, dicta mollitia ratione facilis
        commodi, id totam libero deserunt. Fugit, repellendus vitae eligendi
        placeat excepturi corrupti! Dignissimos laudantium voluptates porro?
        Minima repellat blanditiis obcaecati quos quae qui consectetur, tenetur
        cum dolores commodi dolorem, dolore corrupti quam maiores delectus
        asperiores labore architecto numquam sed odio rerum. Deserunt minima
        ratione sit illo, maxime, expedita, quae sapiente at aliquid earum porro
        accusantium numquam consectetur nihil. In animi est, dignissimos sequi
        atque ex, vel ab doloribus facilis placeat quae! Amet, ipsa pariatur
        autem, alias excepturi cupiditate fuga odio ducimus harum tempore
        distinctio praesentium nostrum nulla voluptate nobis facere earum sequi
        reprehenderit quos expedita, quod corrupti exercitationem. Tenetur
        voluptate possimus earum ut perspiciatis, quasi quas vero veritatis
        facilis rerum amet excepturi iste expedita natus magni veniam doloribus
        suscipit sit. Omnis autem id ratione ut neque eos libero sapiente
        consequuntur laudantium ipsam, quasi aliquid. Delectus, atque fuga.
        Temporibus maiores aspernatur quidem mollitia quisquam hic at, enim unde
        animi minima vel officia sapiente quaerat eveniet alias quo et voluptate
        doloremque fuga numquam provident aliquam tenetur aliquid? Eveniet sequi
        molestiae labore error consequatur officia consequuntur ipsum ipsam
        dolorem ea animi, ullam architecto quia quasi? Ab iste perferendis
        architecto quam unde quae voluptatum, in aliquid ipsam nostrum repellat.
        Numquam, voluptates, fugiat, dicta quas facilis quibusdam illo pariatur
        esse consectetur qui totam odio. Eaque deserunt inventore ea dicta,
        aliquam neque cupiditate rerum dolor iste impedit sit. Optio nulla
        doloribus accusamus atque inventore nisi nemo eius velit! Quasi quo est
        illo magni reiciendis quisquam distinctio, debitis quidem accusamus non,
        harum voluptatibus optio necessitatibus possimus! Error, dolores
        blanditiis, et, nam rerum cupiditate earum in nobis unde repellat id
        quas exercitationem obcaecati voluptates fugiat nesciunt! Sequi saepe
        perferendis laborum vitae facilis ullam deleniti, vel veniam minima
        dolores iusto debitis quos eveniet, voluptates neque necessitatibus
        molestias ducimus corrupti pariatur, sit quasi obcaecati culpa tempore
        aliquam! Labore, quos molestias fugit perspiciatis aliquam saepe natus
        quam laudantium ipsam quidem. Sint aut vero accusamus facilis voluptatem
        itaque officiis maxime ut laboriosam. Nesciunt sed vero deleniti fuga
        non mollitia quia quos ut dicta dignissimos fugiat aliquid quae
        consectetur repellendus beatae cupiditate, expedita odit? Esse, ut?
      </p>
    </>
  );
}
