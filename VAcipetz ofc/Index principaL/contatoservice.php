<?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
          $nome = $_POST['nome'];
          $telefone = $_POST['telefone'];
          $email = $_POST['email'];
          $mensagem = $_POST['mensagem'];
      
          $to = "vacipetoficial@gmail.com";
          $subject = "Contato de: $nome";
          $body = "Nome: $nome\nTelefone: $telefone\nE-mail: $email\nMensagem:\n$mensagem";
          $headers = "From: $email";
      
          if (mail($to, $subject, $body, $headers)) {
              echo "<script>alert('Sua mensagem foi enviada com sucesso!');</script>";
          } else {
              echo "<script>alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');</script>";
          }
      }
      ?>